import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BosDurumEmptyState } from './BosDurumEmptyState';

describe('BosDurumEmptyState', () => {
  it('renders empty state message', () => {
    render(<BosDurumEmptyState onAddLead={vi.fn()} />);
    expect(screen.getByText('Henüz adayınız bulunmuyor.')).toBeInTheDocument();
  });

  it('renders description text', () => {
    render(<BosDurumEmptyState onAddLead={vi.fn()} />);
    expect(screen.getByText(/Müşteri portföyünüzü oluşturmak/)).toBeInTheDocument();
  });

  it('calls onAddLead when İlk Adayı Ekle button clicked', () => {
    const onAddLead = vi.fn();
    render(<BosDurumEmptyState onAddLead={onAddLead} />);
    fireEvent.click(screen.getByText('İlk Adayı Ekle'));
    expect(onAddLead).toHaveBeenCalled();
  });

  it('renders add icon on button', () => {
    render(<BosDurumEmptyState onAddLead={vi.fn()} />);
    expect(screen.getByText('add')).toBeInTheDocument();
  });

  it('renders plagiarism icon illustration', () => {
    render(<BosDurumEmptyState onAddLead={vi.fn()} />);
    expect(screen.getByText('plagiarism')).toBeInTheDocument();
  });
});
