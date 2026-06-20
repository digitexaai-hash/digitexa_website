import React, { useState } from 'react';
import { Server, ShieldAlert, Cpu, Network, Database, Settings, ArrowRight, Activity, ShieldCheck, RefreshCw } from 'lucide-react';

export default function ITInfrastructure() {
  const [telemetry, setTelemetry] = useState({
    cpu: 34,
    ram: 68,
    storage: 42,
    latency: 18
  });
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshTelemetry = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setTelemetry({
        cpu: Math.floor(Math.random() * (45 - 20) + 20),
        ram: Math.floor(Math.random() * (75 - 60) + 60),
        storage: 42, // Storage doesn't change rapidly
        latency: Math.floor(Math.random() * (25 - 12) + 12)
      });
      setIsRefreshing(false);
    }, 800);
  };

  return (
    <div className="container animate-fade-in">
      <div className="section-title-wrap">
        <div className="hero-tagline">Infrastructure Services</div>
        <h1 className="section-title">IT Infrastructure Solutions</h1>
        <p className="section-desc">
          High-performance network engineering, secure cloud servers, and OT shopfloor isolation designed specifically for SMBs and Manufacturing plants.
        </p>
      </div>

      {/* Services Pillars */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '60px' }}>
        
        {/* Card 1: OT & Manufacturing Network */}
        <div className="glass-card" style={{ padding: '32px', textAlign: 'left' }}>
          <div className="service-icon-wrap" style={{ color: '#3b82f6' }}>
            <Network size={24} />
          </div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>OT & Shopfloor Networks</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '16px' }}>
            Robust industrial networking for plant floors, assembly lines, and high-ceiling warehouses. We deploy managed industrial switches and isolate critical PLC systems.
          </p>
          <ul style={{ listStyle: 'none', paddingLeft: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <li style={{ marginBottom: '8px', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <ShieldCheck size={16} style={{ color: '#3b82f6' }} /> Industrial Wi-Fi for warehouse barcode scanners
            </li>
            <li style={{ marginBottom: '8px', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <ShieldCheck size={16} style={{ color: '#3b82f6' }} /> OT/IT network isolation via physical DMZs
            </li>
            <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <ShieldCheck size={16} style={{ color: '#3b82f6' }} /> Ring topologies for fiber cable redundancy
            </li>
          </ul>
        </div>

        {/* Card 2: SMB Servers & Cloud */}
        <div className="glass-card" style={{ padding: '32px', textAlign: 'left' }}>
          <div className="service-icon-wrap" style={{ color: '#10b981' }}>
            <Server size={24} />
          </div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>SMB Server & Hybrid Cloud</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '16px' }}>
            Consolidate your on-premise hardware using hypervisors. We configure redundant storage arrays, local virtualization, and migrate mail architectures seamlessly.
          </p>
          <ul style={{ listStyle: 'none', paddingLeft: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <li style={{ marginBottom: '8px', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <ShieldCheck size={16} style={{ color: '#10b981' }} /> Hypervisor virtualization (Proxmox / VMware)
            </li>
            <li style={{ marginBottom: '8px', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <ShieldCheck size={16} style={{ color: '#10b981' }} /> Synology/TrueNAS storage configuration
            </li>
            <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <ShieldCheck size={16} style={{ color: '#10b981' }} /> Active Directory & Microsoft 365 migrations
            </li>
          </ul>
        </div>

        {/* Card 3: Security & Backups */}
        <div className="glass-card" style={{ padding: '32px', textAlign: 'left' }}>
          <div className="service-icon-wrap" style={{ color: '#6366f1' }}>
            <Database size={24} />
          </div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Backup Systems & Security</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '16px' }}>
            Protect your plant from ransomware and hardware failures. We enforce automated offsite backup routines and secure remote work corridors for staff.
          </p>
          <ul style={{ listStyle: 'none', paddingLeft: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <li style={{ marginBottom: '8px', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <ShieldCheck size={16} style={{ color: '#6366f1' }} /> Strict 3-2-1 backup strategy with immutable logs
            </li>
            <li style={{ marginBottom: '8px', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <ShieldCheck size={16} style={{ color: '#6366f1' }} /> Edge protection (pfSense/Fortinet Firewalls)
            </li>
            <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <ShieldCheck size={16} style={{ color: '#6366f1' }} /> Multi-factor authenticated client VPN corridors
            </li>
          </ul>
        </div>
      </div>

      {/* Telemetry Dashboard Component */}
      <div className="chart-container" style={{ margin: '60px 0', padding: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div className="chart-title" style={{ marginBottom: '4px' }}>Active Telemetry Hub</div>
            <h3 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Activity size={22} style={{ color: 'var(--accent-primary)' }} />
              Live Infrastructure Monitoring
            </h3>
          </div>
          <button 
            className="btn btn-secondary" 
            style={{ padding: '8px 16px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}
            onClick={refreshTelemetry}
            disabled={isRefreshing}
          >
            <RefreshCw size={14} className={isRefreshing ? 'spin-anim' : ''} />
            {isRefreshing ? 'Polling...' : 'Refresh Status'}
          </button>
        </div>

        {/* Telemetry Metrics Panel */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', margin: '20px 0' }}>
          <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px' }}>Core Processor Usage</div>
            <div style={{ fontSize: '2rem', fontWeight: '800', color: '#3b82f6', transition: 'all 0.3s ease' }}>{telemetry.cpu}%</div>
            <div style={{ height: '4px', backgroundColor: 'var(--border-color)', borderRadius: '2px', marginTop: '12px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${telemetry.cpu}%`, backgroundColor: '#3b82f6', transition: 'width 0.5s ease' }}></div>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px' }}>System Memory Pool</div>
            <div style={{ fontSize: '2rem', fontWeight: '800', color: '#10b981', transition: 'all 0.3s ease' }}>{telemetry.ram}%</div>
            <div style={{ height: '4px', backgroundColor: 'var(--border-color)', borderRadius: '2px', marginTop: '12px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${telemetry.ram}%`, backgroundColor: '#10b981', transition: 'width 0.5s ease' }}></div>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px' }}>Storage Array Pool</div>
            <div style={{ fontSize: '2rem', fontWeight: '800', color: '#6366f1', transition: 'all 0.3s ease' }}>{telemetry.storage}%</div>
            <div style={{ height: '4px', backgroundColor: 'var(--border-color)', borderRadius: '2px', marginTop: '12px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${telemetry.storage}%`, backgroundColor: '#6366f1', transition: 'width 0.5s ease' }}></div>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px' }}>WAN Edge Latency</div>
            <div style={{ fontSize: '2rem', fontWeight: '800', color: '#ec4899', transition: 'all 0.3s ease' }}>{telemetry.latency} ms</div>
            <div style={{ height: '4px', backgroundColor: 'var(--border-color)', borderRadius: '2px', marginTop: '12px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${(telemetry.latency / 40) * 100}%`, backgroundColor: '#ec4899', transition: 'width 0.5s ease' }}></div>
            </div>
          </div>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '20px' }}>
          Mock diagnostics dashboard illustrating 24/7 hypervisor agent polling. Real dashboards hook into secure Prometheus & Grafana APIs.
        </p>
      </div>

      {/* Industrial Hardware Standards */}
      <div style={{ textAlign: 'left', margin: '40px 0 20px' }}>
        <h3 style={{ fontSize: '1.75rem', marginBottom: '24px' }}>Hardware and Deployment Standards</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          
          <div style={{ display: 'flex', gap: '16px' }}>
            <Settings size={24} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>OT/PLCs Separation</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>We implement firewall rules separating the manufacturing machinery networks (OT) from the corporate office PC networks, protecting plant output.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <ShieldAlert size={24} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>UPS & Power Redundancy</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Configuring automatic server shutdown scripts tied directly to uninterruptible power supplies (UPS) to prevent storage corruption.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <Cpu size={24} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>Proxmox High Availability</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Cluster multi-node servers to automatically migrate virtual instances if one physical CPU node suffers a hardware alert.</p>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .spin-anim {
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
