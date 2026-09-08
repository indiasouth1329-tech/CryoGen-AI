export interface AgentNode {
  id: string;
  name: string;
  domain: string;
  role: string;
  tools: string[];
  connections: string[];
  color: string;
  x: number; // percentage in visualization
  y: number;
}

export interface UseCaseData {
  id: string;
  title: string;
  domain: string;
  trigger: string;
  agents: string[];
  validation: string;
  approval: string;
  outcome: string;
  valuePoints: string[];
  systems: string[];
}

export interface StepData {
  number: number;
  title: string;
  category: 'Objective' | 'Decomposition' | 'Mesh' | 'Collaboration' | 'Systems' | 'Validation' | 'Governance' | 'Execution' | 'Measurement';
  description: string;
  details: string[];
  interactionType?: 'Explicit' | 'Implicit' | 'System' | 'Control';
}

export interface ValueBlockData {
  number: string;
  title: string;
  feature: string;
  featureSubtitle: string;
  advantage: string;
  benefit: string;
  bulletPoints: string[];
}
