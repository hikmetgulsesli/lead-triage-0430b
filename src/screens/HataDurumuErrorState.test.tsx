import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { HataDurumuErrorState } from './HataDurumuErrorState';

describe('HataDurumuErrorState', () => {
  it('renders error state with correct title', () => {
    render(<HataDurumuErrorState onRetry={vi.fn()} onClear={vi.fn()} />);
    expect(screen.getByText('Hata Durumu')).toBeInTheDocument();
    expect(screen.getByText('Veri kaydedilirken bir hata oluştu.')).toBeInTheDocument();
  });

  it('calls onRetry when Tekrar Dene button clicked', () => {
    const onRetry = vi.fn();
    render(<HataDurumuErrorState onRetry={onRetry} onClear={vi.fn()} />);
    fireEvent.click(screen.getByText('Tekrar Dene'));
    expect(onRetry).toHaveBeenCalled();
  });

  it('calls onClear when Yerel Veriyi Temizle button clicked', () => {
    const onClear = vi.fn();
    render(<HataDurumuErrorState onRetry={vi.fn()} onClear={onClear} />);
    fireEvent.click(screen.getByText('Yerel Veriyi Temizle'));
    expect(onClear).toHaveBeenCalled();
  });

  it('renders warning icon', () => {
    render(<HataDurumuErrorState onRetry={vi.fn()} onClear={vi.fn()} />);
    expect(screen.getByText('warning')).toBeInTheDocument();
  });

  it('renders both action buttons', () => {
    render(<HataDurumuErrorState onRetry={vi.fn()} onClear={vi.fn()} />);
    expect(screen.getByText('Tekrar Dene')).toBeInTheDocument();
    expect(screen.getByText('Yerel Veriyi Temizle')).toBeInTheDocument();
  });
});
