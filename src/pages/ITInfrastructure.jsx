import React from 'react';
import { Server, ShieldAlert, Cpu, Network, Database, Settings, ShieldCheck, CheckCircle, Headphones, Cloud, Shield, Globe, RefreshCw as Sync, Wifi, HardDrive, Timer, Zap } from 'lucide-react';

export default function ITInfrastructure() {
  return (
    <div className="container animate-fade-in">
      <section className="hero-grid" style={{ marginBottom: '60px' }}>
        <div className="hero-section">
          <div className="hero-tagline">Infrastructure Services</div>
          <h1 className="section-title" style={{ fontSize: '2.75rem' }}>IT Infrastructure <br /><span className="gradient-text">Solutions</span></h1>
          <p className="section-desc" style={{ marginLeft: 0 }}>
            High-performance network engineering, secure cloud servers, and OT shopfloor isolation designed specifically for SMBs and Manufacturing plants.
          </p>
        </div>
        <div className="glass-card" style={{ padding: '32px', textAlign: 'center', border: '1px solid var(--border-glow)' }}>
          <div style={{ background: 'linear-gradient(135deg, #3b82f6, #10b981)', borderRadius: '16px', width: '72px', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', margin: '0 auto 20px' }}>
            <Server size={32} />
          </div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Full-Stack Infrastructure</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            <span style={{ padding: '6px 14px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>Networking</span>
            <span style={{ padding: '6px 14px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>Cloud</span>
            <span style={{ padding: '6px 14px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>Security</span>
            <span style={{ padding: '6px 14px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>Backup</span>
            <span style={{ padding: '6px 14px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>Monitoring</span>
            <span style={{ padding: '6px 14px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>OT/IT</span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '20px' }}>End-to-end infrastructure design, deployment, and managed support for growing enterprises.</p>
        </div>
      </section>

      {/* Core Services Pillars */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '60px' }}>
        <div className="glass-card" style={{ padding: '40px 32px', textAlign: 'left' }}>
          <div className="service-icon-wrap" style={{ color: '#3b82f6', marginBottom: '20px' }}>
            <Network size={26} />
          </div>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>OT & Shopfloor Networks</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
            Robust industrial networking for plant floors, assembly lines, and high-ceiling warehouses. We deploy managed industrial switches and isolate critical PLC systems.
          </p>
          <ul style={{ listStyle: 'none', paddingLeft: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <li style={{ marginBottom: '10px', display: 'flex', gap: '10px', alignItems: 'center' }}>
              <ShieldCheck size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> Industrial Wi-Fi for warehouse barcode scanners
            </li>
            <li style={{ marginBottom: '10px', display: 'flex', gap: '10px', alignItems: 'center' }}>
              <ShieldCheck size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> OT/IT network isolation via physical DMZs
            </li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <ShieldCheck size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> Ring topologies for fiber cable redundancy
            </li>
          </ul>
          <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <span style={{ padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)', color: '#3b82f6' }}>DMZ Architecture</span>
            <span style={{ padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)', color: '#3b82f6' }}>Ring Topology</span>
            <span style={{ padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)', color: '#3b82f6' }}>Industrial Switches</span>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '40px 32px', textAlign: 'left' }}>
          <div className="service-icon-wrap" style={{ color: '#10b981', marginBottom: '20px' }}>
            <Server size={26} />
          </div>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>SMB Server & Hybrid Cloud</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
            Consolidate your on-premise hardware using hypervisors. We configure redundant storage arrays, local virtualization, and migrate mail architectures seamlessly.
          </p>
          <ul style={{ listStyle: 'none', paddingLeft: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <li style={{ marginBottom: '10px', display: 'flex', gap: '10px', alignItems: 'center' }}>
              <ShieldCheck size={16} style={{ color: '#10b981', flexShrink: 0 }} /> Hypervisor virtualization (Proxmox / VMware)
            </li>
            <li style={{ marginBottom: '10px', display: 'flex', gap: '10px', alignItems: 'center' }}>
              <ShieldCheck size={16} style={{ color: '#10b981', flexShrink: 0 }} /> Synology/TrueNAS storage configuration
            </li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <ShieldCheck size={16} style={{ color: '#10b981', flexShrink: 0 }} /> Active Directory & Microsoft 365 migrations
            </li>
          </ul>
          <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <span style={{ padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)', color: '#10b981' }}>Proxmox</span>
            <span style={{ padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)', color: '#10b981' }}>Hyper-V</span>
            <span style={{ padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)', color: '#10b981' }}>Active Directory</span>
            <span style={{ padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)', color: '#10b981' }}>M365</span>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '40px 32px', textAlign: 'left' }}>
          <div className="service-icon-wrap" style={{ color: '#6366f1', marginBottom: '20px' }}>
            <Database size={26} />
          </div>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>Backup Systems & Security</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
            Protect your plant from ransomware and hardware failures. We enforce automated offsite backup routines and secure remote work corridors for staff.
          </p>
          <ul style={{ listStyle: 'none', paddingLeft: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <li style={{ marginBottom: '10px', display: 'flex', gap: '10px', alignItems: 'center' }}>
              <ShieldCheck size={16} style={{ color: '#6366f1', flexShrink: 0 }} /> Strict 3-2-1 backup strategy with immutable logs
            </li>
            <li style={{ marginBottom: '10px', display: 'flex', gap: '10px', alignItems: 'center' }}>
              <ShieldCheck size={16} style={{ color: '#6366f1', flexShrink: 0 }} /> Edge protection (pfSense/Fortinet Firewalls)
            </li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <ShieldCheck size={16} style={{ color: '#6366f1', flexShrink: 0 }} /> Multi-factor authenticated client VPN corridors
            </li>
          </ul>
          <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <span style={{ padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)', color: '#6366f1' }}>3-2-1 Backup</span>
            <span style={{ padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)', color: '#6366f1' }}>pfSense</span>
            <span style={{ padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)', color: '#6366f1' }}>MFA VPN</span>
            <span style={{ padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)', color: '#6366f1' }}>Immutable Logs</span>
          </div>
        </div>
      </div>

      {/* Hardware Standards Feature Showcase */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center', textAlign: 'left', margin: '80px 0 40px' }}>
        <div>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '32px', fontSize: '1.75rem' }}>Hardware & Deployment Standards</h2>
          
          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
            <div style={{ background: 'linear-gradient(135deg, #10b981, #059669)', borderRadius: '12px', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
              <ShieldAlert size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>OT/PLCs Separation</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>We implement firewall rules separating the manufacturing machinery networks (OT) from the corporate office PC networks, protecting plant output.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
            <div style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)', borderRadius: '12px', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
              <Timer size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>UPS & Power Redundancy</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Configuring automatic server shutdown scripts tied directly to uninterruptible power supplies (UPS) to prevent storage corruption.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)', borderRadius: '12px', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
              <Cpu size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Proxmox High Availability</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Cluster multi-node servers to automatically migrate virtual instances if one physical CPU node suffers a hardware alert.</p>
            </div>
          </div>
        </div>

        <div className="glass-card chart-container" style={{ padding: '32px', textAlign: 'center' }}>
          <div className="chart-title">Infrastructure Stack</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '24px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Wifi size={20} style={{ color: '#3b82f6' }} />
              <div style={{ flex: 1, textAlign: 'left' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '4px' }}>Network Uptime</div>
                <div style={{ height: '8px', backgroundColor: 'var(--border-color)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '99.9%', backgroundColor: '#3b82f6', borderRadius: '4px' }}></div>
                </div>
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#3b82f6' }}>99.9%</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <HardDrive size={20} style={{ color: '#10b981' }} />
              <div style={{ flex: 1, textAlign: 'left' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '4px' }}>Data Protection</div>
                <div style={{ height: '8px', backgroundColor: 'var(--border-color)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '100%', backgroundColor: '#10b981', borderRadius: '4px' }}></div>
                </div>
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#10b981' }}>100%</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Zap size={20} style={{ color: '#f59e0b' }} />
              <div style={{ flex: 1, textAlign: 'left' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '4px' }}>Response Time</div>
                <div style={{ height: '8px', backgroundColor: 'var(--border-color)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '95%', backgroundColor: '#f59e0b', borderRadius: '4px' }}></div>
                </div>
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#f59e0b' }}>&lt;15min</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Globe size={20} style={{ color: '#6366f1' }} />
              <div style={{ flex: 1, textAlign: 'left' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '4px' }}>Client Retention</div>
                <div style={{ height: '8px', backgroundColor: 'var(--border-color)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '97%', backgroundColor: '#6366f1', borderRadius: '4px' }}></div>
                </div>
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#6366f1' }}>97%</span>
            </div>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '8px' }}>Performance metrics based on active managed infrastructure clients.</p>
        </div>
      </div>

      {/* Affordable Managed IT Services */}
      <section className="container" style={{ padding: '60px 0' }}>
        <div className="section-title-wrap">
          <div className="hero-tagline">Managed Services</div>
          <h2 className="section-title">Affordable Managed IT Services for Growing Businesses</h2>
          <p className="section-desc">
            Enterprise-grade IT support without the cost of an in-house department.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '40px', marginTop: '40px', textAlign: 'center', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)', borderRadius: '16px', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', margin: '0 auto 20px' }}>
            <Server size={28} />
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Your Trusted IT Partner</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '16px' }}>
            Many small and medium-sized businesses understand the importance of technology but often cannot justify the cost of hiring a full-time IT team. That's where we help.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.8' }}>
            We provide comprehensive IT services and support to organizations that need professional technology management without the expense of maintaining an in-house IT department. Our experienced team acts as your dedicated IT partner, ensuring your systems remain secure, reliable, and optimized for business growth.
          </p>
        </div>

        {/* Our Services */}
        <h3 style={{ fontSize: '1.75rem', margin: '48px 0 32px', textAlign: 'center', letterSpacing: '-0.5px' }}>Our Services</h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          <div className="glass-card" style={{ padding: '32px', textAlign: 'left' }}>
            <div className="service-icon-wrap" style={{ color: '#3b82f6', marginBottom: '16px' }}>
              <Server size={24} />
            </div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>IT Infrastructure Management</h4>
            <ul style={{ listStyle: 'none', paddingLeft: 0, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              <li style={{ marginBottom: '10px', display: 'flex', gap: '8px', alignItems: 'center' }}><CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> Server installation and maintenance</li>
              <li style={{ marginBottom: '10px', display: 'flex', gap: '8px', alignItems: 'center' }}><CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> Network design and management</li>
              <li style={{ marginBottom: '10px', display: 'flex', gap: '8px', alignItems: 'center' }}><CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> Wi-Fi deployment and optimization</li>
              <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}><CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> Hardware procurement and support</li>
            </ul>
          </div>

          <div className="glass-card" style={{ padding: '32px', textAlign: 'left' }}>
            <div className="service-icon-wrap" style={{ color: '#10b981', marginBottom: '16px' }}>
              <Headphones size={24} />
            </div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Help Desk & Technical Support</h4>
            <ul style={{ listStyle: 'none', paddingLeft: 0, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              <li style={{ marginBottom: '10px', display: 'flex', gap: '8px', alignItems: 'center' }}><CheckCircle size={16} style={{ color: '#10b981', flexShrink: 0 }} /> Remote and onsite IT support</li>
              <li style={{ marginBottom: '10px', display: 'flex', gap: '8px', alignItems: 'center' }}><CheckCircle size={16} style={{ color: '#10b981', flexShrink: 0 }} /> User account management</li>
              <li style={{ marginBottom: '10px', display: 'flex', gap: '8px', alignItems: 'center' }}><CheckCircle size={16} style={{ color: '#10b981', flexShrink: 0 }} /> Software troubleshooting</li>
              <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}><CheckCircle size={16} style={{ color: '#10b981', flexShrink: 0 }} /> System monitoring and maintenance</li>
            </ul>
          </div>

          <div className="glass-card" style={{ padding: '32px', textAlign: 'left' }}>
            <div className="service-icon-wrap" style={{ color: '#6366f1', marginBottom: '16px' }}>
              <Cloud size={24} />
            </div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Cloud Solutions</h4>
            <ul style={{ listStyle: 'none', paddingLeft: 0, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              <li style={{ marginBottom: '10px', display: 'flex', gap: '8px', alignItems: 'center' }}><CheckCircle size={16} style={{ color: '#6366f1', flexShrink: 0 }} /> Microsoft 365 deployment and administration</li>
              <li style={{ marginBottom: '10px', display: 'flex', gap: '8px', alignItems: 'center' }}><CheckCircle size={16} style={{ color: '#6366f1', flexShrink: 0 }} /> Cloud migration services</li>
              <li style={{ marginBottom: '10px', display: 'flex', gap: '8px', alignItems: 'center' }}><CheckCircle size={16} style={{ color: '#6366f1', flexShrink: 0 }} /> Email management and security</li>
              <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}><CheckCircle size={16} style={{ color: '#6366f1', flexShrink: 0 }} /> Data backup and disaster recovery</li>
            </ul>
          </div>

          <div className="glass-card" style={{ padding: '32px', textAlign: 'left' }}>
            <div className="service-icon-wrap" style={{ color: '#ec4899', marginBottom: '16px' }}>
              <Shield size={24} />
            </div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Cybersecurity Services</h4>
            <ul style={{ listStyle: 'none', paddingLeft: 0, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              <li style={{ marginBottom: '10px', display: 'flex', gap: '8px', alignItems: 'center' }}><CheckCircle size={16} style={{ color: '#ec4899', flexShrink: 0 }} /> Firewall configuration and management</li>
              <li style={{ marginBottom: '10px', display: 'flex', gap: '8px', alignItems: 'center' }}><CheckCircle size={16} style={{ color: '#ec4899', flexShrink: 0 }} /> Endpoint protection</li>
              <li style={{ marginBottom: '10px', display: 'flex', gap: '8px', alignItems: 'center' }}><CheckCircle size={16} style={{ color: '#ec4899', flexShrink: 0 }} /> Security monitoring</li>
              <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}><CheckCircle size={16} style={{ color: '#ec4899', flexShrink: 0 }} /> Vulnerability assessment and remediation</li>
            </ul>
          </div>

          <div className="glass-card" style={{ padding: '32px', textAlign: 'left' }}>
            <div className="service-icon-wrap" style={{ color: '#f59e0b', marginBottom: '16px' }}>
              <Globe size={24} />
            </div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Network & Connectivity Solutions</h4>
            <ul style={{ listStyle: 'none', paddingLeft: 0, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              <li style={{ marginBottom: '10px', display: 'flex', gap: '8px', alignItems: 'center' }}><CheckCircle size={16} style={{ color: '#f59e0b', flexShrink: 0 }} /> LAN/WAN implementation</li>
              <li style={{ marginBottom: '10px', display: 'flex', gap: '8px', alignItems: 'center' }}><CheckCircle size={16} style={{ color: '#f59e0b', flexShrink: 0 }} /> VPN setup and management</li>
              <li style={{ marginBottom: '10px', display: 'flex', gap: '8px', alignItems: 'center' }}><CheckCircle size={16} style={{ color: '#f59e0b', flexShrink: 0 }} /> Internet connectivity optimization</li>
              <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}><CheckCircle size={16} style={{ color: '#f59e0b', flexShrink: 0 }} /> Multi-site network integration</li>
            </ul>
          </div>

          <div className="glass-card" style={{ padding: '32px', textAlign: 'left' }}>
            <div className="service-icon-wrap" style={{ color: '#8b5cf6', marginBottom: '16px' }}>
              <Sync size={24} />
            </div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Digital Transformation</h4>
            <ul style={{ listStyle: 'none', paddingLeft: 0, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              <li style={{ marginBottom: '10px', display: 'flex', gap: '8px', alignItems: 'center' }}><CheckCircle size={16} style={{ color: '#8b5cf6', flexShrink: 0 }} /> Process automation</li>
              <li style={{ marginBottom: '10px', display: 'flex', gap: '8px', alignItems: 'center' }}><CheckCircle size={16} style={{ color: '#8b5cf6', flexShrink: 0 }} /> IT consulting</li>
              <li style={{ marginBottom: '10px', display: 'flex', gap: '8px', alignItems: 'center' }}><CheckCircle size={16} style={{ color: '#8b5cf6', flexShrink: 0 }} /> Technology planning and budgeting</li>
              <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}><CheckCircle size={16} style={{ color: '#8b5cf6', flexShrink: 0 }} /> Business continuity solutions</li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="glass-card" style={{ padding: '40px', marginTop: '48px' }}>
          <div style={{ background: 'linear-gradient(135deg, #10b981, #059669)', borderRadius: '16px', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', margin: '0 auto 20px' }}>
            <Shield size={28} />
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', textAlign: 'center', letterSpacing: '-0.5px' }}>Why Choose Us?</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
            {[
              'Cost-effective alternative to an in-house IT department',
              'Experienced and certified IT professionals',
              'Proactive monitoring and maintenance',
              'Fast response times',
              'Scalable solutions that grow with your business',
              'Predictable monthly support costs'
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center', padding: '14px', background: 'var(--bg-secondary)', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                <CheckCircle size={20} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.92rem' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Our Mission */}
        <div style={{ textAlign: 'center', marginTop: '56px', position: 'relative' }}>
          <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, #3b82f6, #6366f1)', borderRadius: '2px', margin: '0 auto 32px' }}></div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', letterSpacing: '-0.5px' }}>Our Mission</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
            To provide enterprise-grade IT services to small and medium-sized businesses, enabling them to focus on their core operations while we manage their technology infrastructure. We help businesses improve productivity, reduce downtime, strengthen security, and achieve their growth objectives through reliable and affordable IT solutions.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.8', maxWidth: '800px', margin: '16px auto 0' }}>
            Whether you need complete IT management or support for your existing team, we deliver the expertise, tools, and support required to keep your business running efficiently and securely.
          </p>
        </div>
      </section>
    </div>
  );
}