import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import App from './App';

vi.mock('./utils/storage', async () => {
  const actual = await vi.importActual('./utils/storage');
  return {
    ...actual as object,
    loadState: vi.fn(() => null),
    saveState: vi.fn(() => true),
  };
});

describe('App', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container.querySelector('nav')).toBeTruthy();
  });

  it('shows app title', () => {
    render(<App />);
    expect(screen.getByText('LeadTriage')).toBeInTheDocument();
  });

  it('shows empty state when no leads', () => {
    render(<App />);
    expect(screen.getByText('Henüz adayınız bulunmuyor.')).toBeInTheDocument();
  });

  it('opens add lead modal', () => {
    render(<App />);
    fireEvent.click(screen.getByText('İlk Adayı Ekle'));
    expect(screen.getByText('Yeni Aday Ekle')).toBeInTheDocument();
  });
});
