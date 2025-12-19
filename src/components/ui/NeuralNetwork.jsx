import React, { useEffect, useRef } from 'react';


const NeuralNetwork = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const nodesRef = useRef([]);
    const pulsesRef = useRef([]);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;

        // Configuration
        const config = {
            nodeCount: 60,
            maxConnections: 4,
            connectionDistance: 150,
            nodeSpeed: 0.3,
            pulseSpeed: 2,
            mouseInfluence: 30,
            nodeSize: { min: 2, max: 6 },
            glowIntensity: 0.6,
        };

        const colors = {
            primary: '#3B82F6',
            secondary: '#8B5CF6',
            accent: '#06B6D4',
            glow: '#60A5FA',
        };

        // Resize canvas
        const resizeCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Mouse tracking
        const handleMouseMove = (e) => {
            mouseRef.current = {
                x: e.clientX,
                y: e.clientY,
            };
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Node class
        class Node {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * config.nodeSpeed;
                this.vy = (Math.random() - 0.5) * config.nodeSpeed;
                this.radius = config.nodeSize.min + Math.random() * (config.nodeSize.max - config.nodeSize.min);
                this.color = [colors.primary, colors.secondary, colors.accent][Math.floor(Math.random() * 3)];
                this.pulsePhase = Math.random() * Math.PI * 2;
                this.connections = [];
            }

            update() {
                // Mouse influence
                const dx = mouseRef.current.x - this.x;
                const dy = mouseRef.current.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 200) {
                    const force = (200 - distance) / 200;
                    this.vx -= (dx / distance) * force * 0.02;
                    this.vy -= (dy / distance) * force * 0.02;
                }

                // Update position
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Keep within bounds
                this.x = Math.max(0, Math.min(width, this.x));
                this.y = Math.max(0, Math.min(height, this.y));

                // Damping
                this.vx *= 0.99;
                this.vy *= 0.99;

                // Update pulse phase
                this.pulsePhase += 0.02;
            }

            draw() {
                const pulse = Math.sin(this.pulsePhase) * 0.3 + 1;
                const size = this.radius * pulse;

                // Glow effect
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, size * 3);
                gradient.addColorStop(0, this.color + 'AA');
                gradient.addColorStop(0.5, this.color + '44');
                gradient.addColorStop(1, this.color + '00');

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, size * 3, 0, Math.PI * 2);
                ctx.fill();

                // Core node
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Pulse class (data flow animation)
        class Pulse {
            constructor(node1, node2) {
                this.node1 = node1;
                this.node2 = node2;
                this.progress = 0;
                this.speed = config.pulseSpeed / 100;
                this.color = colors.accent;
            }

            update() {
                this.progress += this.speed;
                return this.progress >= 1;
            }

            draw() {
                const x = this.node1.x + (this.node2.x - this.node1.x) * this.progress;
                const y = this.node1.y + (this.node2.y - this.node1.y) * this.progress;

                // Glow
                const gradient = ctx.createRadialGradient(x, y, 0, x, y, 8);
                gradient.addColorStop(0, this.color + 'FF');
                gradient.addColorStop(0.5, this.color + '88');
                gradient.addColorStop(1, this.color + '00');

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(x, y, 8, 0, Math.PI * 2);
                ctx.fill();

                // Core
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(x, y, 2, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Initialize nodes
        const initNodes = () => {
            nodesRef.current = [];
            for (let i = 0; i < config.nodeCount; i++) {
                nodesRef.current.push(new Node());
            }
        };

        // Find connections
        const updateConnections = () => {
            nodesRef.current.forEach(node => {
                node.connections = [];
            });

            for (let i = 0; i < nodesRef.current.length; i++) {
                const node1 = nodesRef.current[i];
                if (node1.connections.length >= config.maxConnections) continue;

                for (let j = i + 1; j < nodesRef.current.length; j++) {
                    const node2 = nodesRef.current[j];
                    if (node2.connections.length >= config.maxConnections) continue;

                    const dx = node2.x - node1.x;
                    const dy = node2.y - node1.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < config.connectionDistance) {
                        node1.connections.push(node2);
                        node2.connections.push(node1);

                        // Randomly create pulses
                        if (Math.random() < 0.002) {
                            pulsesRef.current.push(new Pulse(node1, node2));
                        }

                        if (node1.connections.length >= config.maxConnections) break;
                    }
                }
            }
        };

        // Draw connections
        const drawConnections = () => {
            nodesRef.current.forEach(node1 => {
                node1.connections.forEach(node2 => {
                    const dx = node2.x - node1.x;
                    const dy = node2.y - node1.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const opacity = (1 - distance / config.connectionDistance) * 0.3;

                    const gradient = ctx.createLinearGradient(node1.x, node1.y, node2.x, node2.y);
                    gradient.addColorStop(0, node1.color + Math.floor(opacity * 255).toString(16).padStart(2, '0'));
                    gradient.addColorStop(1, node2.color + Math.floor(opacity * 255).toString(16).padStart(2, '0'));

                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(node1.x, node1.y);
                    ctx.lineTo(node2.x, node2.y);
                    ctx.stroke();
                });
            });
        };

        // Animation loop
        const animate = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, width, height);

            // Update and draw connections
            updateConnections();
            drawConnections();

            // Update and draw nodes
            nodesRef.current.forEach(node => {
                node.update();
                node.draw();
            });

            // Update and draw pulses
            pulsesRef.current = pulsesRef.current.filter(pulse => {
                const finished = pulse.update();
                pulse.draw();
                return !finished;
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        // Start
        initNodes();
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ opacity: 0.6 }}
        />
    );
};

export default NeuralNetwork;
