export type TabType = 'platform' | 'ecosystem' | 'civilization' | 'manifesto';

export interface CloudNode {
  id: string;
  name: string;
  region: string;
  status: 'active' | 'synced' | 'indexing' | 'idle';
  load: number;
  rtt: number; // in small ms
  type: 'compute' | 'edge' | 'intelligence' | 'creative';
  coordinates: { x: number; y: number };
}

export interface CivilizationNode {
  id: string;
  title: string;
  category: 'workspace' | 'sovereignty' | 'creativity' | 'expression';
  description: string;
  metric: string;
  accentColor: string;
  icon: string;
}

export interface MetricStream {
  timestamp: string;
  bandwidth: number;
  cpu: number;
  creativityIndex: number;
}

export interface SandboxInstance {
  id: string;
  name: string;
  type: string;
  computePower: number; // 1 to 100
  cacheRadius: number; // in km or percent
  intelligenceModel: 'Nova-V1' | 'Aether-V2' | 'Core-X';
  status: 'deploying' | 'healthy' | 'terminated';
  uptimeSeconds: number;
  color: string;
}
