
// Fix: Added React import to resolve "Cannot find namespace 'React'" for React.ReactNode
import React from 'react';

export interface Product {
  id: string;
  name: string;
  type: string;
  revealed: boolean;
  description?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}