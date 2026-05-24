import { useState, DragEvent } from 'react';
import {
  Upload,
  Sparkles,
  Database,
  Shield,
  ChevronRight,
  CheckCircle,
  Copy,
  Globe,
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  tagline: string;
  domain: string;
  badge: string;
  status: 'operational' | 'expanding' | 'beta';
  color: string;
  glow: string;
}

const products: Product[] = [
  {
    id: 'upload',
    name: 'Upload',
    tagline: 'Fast and lossless file distribution.',
    domain: 'upload.com',
    badge: 'Speed',
    status: 'operational',
    color: 'from-violet-500 to-indigo-500',
    glow: 'rgba(139, 92, 246, 0.15)',
  },
  {
    id: 'ai-solutions',
    name: 'AI Solutions',
    tagline: 'Autonomous AI agents for workflows.',
    domain: 'ai-solutions.com',
    badge: 'Intelligence',
    status: 'beta',
    color: 'from-pink-500 to-rose-500',
    glow: 'rgba(236, 72, 153, 0.15)',
  },
  {
    id: 'data-extraction',
    name: 'Data Extraction',
    tagline: 'Transform data with high yield pipelines.',
    domain: 'data-extraction.com',
    badge: 'Heavy Scale',
    status: 'operational',
    color: 'from-cyan-400 to-blue-500',
    glow: 'rgba(6, 182, 212, 0.15)',
  },
];

function ProductsHubCard({ product }: { product: Product }) {
  return (
    <div
      className={`relative border bg-zinc-900 text-white rounded-lg p-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all group`}
      style={{ borderColor: product.glow }}
    >
      <div className="absolute inset-0 opacity-20 group-hover:opacity-30 rounded-lg" style={{ background: product.glow }} />
      <div className="flex items-center justify-between w-full">
        <span className="text-xs uppercase text-zinc-300">{product.badge}</span>
        <span
          className={`text-xs px-2 py-0.5 rounded-full uppercase text-white bg-${product.status === 'operational' ? 'emerald' : 'amber'}-500`}
        >
          {product.status}
        </span>
      </div>
      <h4 className="mt-2 text-xl font-bold text-white">{product.name}</h4>
      <p className="mt-1 text-sm text-zinc-300">{product.tagline}</p>
      <div className="flex items-center mt-4 text-xs space-x-2 text-zinc-400 group-hover:text-zinc-200">
        <Globe className="w-4 h-4 text-zinc-500" />
        <span>{product.domain}</span>
        <ChevronRight className="ml-auto group-hover:translate-x-1 group-hover:text-zinc-300" />
      </div>
    </div>
  );
}

export default function ProductsHub() {
  return (
    <section className="py-12 mx-auto max-w-7xl px-6 space-y-8">
      <h2 className="text-3xl font-bold text-white">Blurr Products Hub</h2>
      <p className="text-zinc-400">Explore our innovative products designed for performance, scalability, and reliability.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductsHubCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}