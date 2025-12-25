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
            nodeCount: 70, // Slightly more nodes for a grid feel
            maxConnections: 3, // Fewer connections for cleaner look
            connectionDistance: 150,
            nodeSpeed: 0.4,
            pulseSpeed: 3, // Faster data
            mouseInfluence: 100, // Reduced influence radius
            nodeSize: { min: 2, max: 4 }, // Smaller, sharper nodes
            glowIntensity: 0.4,
        };

        const colors = {
            // Neon Cyberpunk Palette
            primary: '#00F0FF',   // Neon Cyan
            secondary: '#7000FF', // Neon Purple
            accent: '#FFFFFF',    // White Hot
            grid: '#00F0FF22',    // Faint grid
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
                this.size = config.nodeSize.min + Math.random() * (config.nodeSize.max - config.nodeSize.min);
                this.color = [colors.primary, colors.secondary][Math.floor(Math.random() * 2)];
                this.pulsePhase = Math.random() * Math.PI * 2;
                this.connections = [];
            }

            update() {
                // Mouse influence - rigid repulsion
                const dx = mouseRef.current.x - this.x;
                const dy = mouseRef.current.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 200) {
                    const force = (200 - distance) / 200;
                    this.vx -= (dx / distance) * force * 0.05;
                    this.vy -= (dy / distance) * force * 0.05;
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
                this.pulsePhase += 0.05;
            }

            draw() {
                const pulse = Math.sin(this.pulsePhase) * 0.2 + 0.8; // Sharper pulse range
                const currentSize = this.size * pulse;

                // Glow effect (Square)
                ctx.shadowBlur = 10;
                ctx.shadowColor = this.color;

                ctx.fillStyle = this.color;
                ctx.fillRect(this.x - currentSize / 2, this.y - currentSize / 2, currentSize, currentSize);

                ctx.shadowBlur = 0; // Reset
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
                this.size = 2;
            }

            update() {
                this.progress += this.speed;
                return this.progress >= 1;
            }

            draw() {
                const x = this.node1.x + (this.node2.x - this.node1.x) * this.progress;
                const y = this.node1.y + (this.node2.y - this.node1.y) * this.progress;

                ctx.fillStyle = this.color;
                ctx.shadowBlur = 5;
                ctx.shadowColor = this.color;
                ctx.fillRect(x - this.size / 2, y - this.size / 2, this.size, this.size);
                ctx.shadowBlur = 0;
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

                        // Randomly create pulses (frequent data bursts)
                        if (Math.random() < 0.005) {
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
                    const opacity = (1 - distance / config.connectionDistance) * 0.2; // Lower opacity for lines

                    ctx.strokeStyle = node1.color;
                    ctx.globalAlpha = opacity;
                    ctx.lineWidth = 0.5; // Thin tech lines
                    ctx.beginPath();
                    ctx.moveTo(node1.x, node1.y);
                    ctx.lineTo(node2.x, node2.y);
                    ctx.stroke();
                    ctx.globalAlpha = 1.0;
                });
            });
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Optional: Draw faint grid background for extra "tech" feel
            // ctx.strokeStyle = colors.grid;
            // ctx.lineWidth = 1;
            // ... grid logic if desired ...

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
            style={{ opacity: 0.8 }} // Increased opacity for neon headers
        />
    );
};

export default NeuralNetwork;
