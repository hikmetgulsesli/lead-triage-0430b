import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProfilPaneli } from './ProfilPaneli';
import type { UserProfile, AppSettings } from '../types/domain';

const mockProfile: UserProfile = {
  name: 'Elif Yılmaz',
  email: 'elif@reelforge.com',
  timezone: 'Europe/Istanbul',
};

const mockSettings: AppSettings = {
  currency: 'TRY',
  density: 'default',
  notifications: {
    newLead: true,
    followUp: false,
  },
};

const defaultProps = {
  profile: mockProfile,
  settings: mockSettings,
  onProfileChange: vi.fn(),
  onSettingsChange: vi.fn(),
  onClose: vi.fn(),
  onClearAll: vi.fn(),
  onNavigate: vi.fn(),
};

describe('ProfilPaneli', () => {
  it('renders profile panel with user info', () => {
    render(<ProfilPaneli {...defaultProps} />);
    expect(screen.getByText('Kullanıcı Profili')).toBeInTheDocument();
    expect(screen.getByText('Elif Yılmaz')).toBeInTheDocument();
    expect(screen.getByText('elif@reelforge.com')).toBeInTheDocument();
  });

  it('displays current timezone', () => {
    render(<ProfilPaneli {...defaultProps} />);
    expect(screen.getByText('Europe/Istanbul')).toBeInTheDocument();
  });

  it('calls onClose when close button clicked', () => {
    const onClose = vi.fn();
    render(<ProfilPaneli {...defaultProps} onClose={onClose} />);
    fireEvent.click(screen.getByLabelText('Kapat'));
    expect(onClose).toHaveBeenCalled();
  });

  it('cycles timezone when Değiştir button clicked', () => {
    const onProfileChange = vi.fn();
    render(<ProfilPaneli {...defaultProps} onProfileChange={onProfileChange} />);
    fireEvent.click(screen.getByText('Değiştir'));
    expect(onProfileChange).toHaveBeenCalledWith({ timezone: 'Europe/London' });
  });

  it('toggles notifications when switch clicked', () => {
    const onSettingsChange = vi.fn();
    render(<ProfilPaneli {...defaultProps} onSettingsChange={onSettingsChange} />);
    // Find the notification toggle button by clicking the section and observing the handler call
    // Use getAllByRole to find the toggle among all buttons
    const allButtons = screen.getAllByRole('button');
    // The toggle should be a button that when clicked triggers settings change
    // Find by testing which button triggers the expected onSettingsChange call
    let toggle = null;
    for (const btn of allButtons) {
      if (btn.textContent === 'notifications') {
        toggle = btn;
        break;
      }
    }
    // Fallback: find button by class pattern matching toggle structure
    if (!toggle) {
      toggle = allButtons.find(b => {
        const className = b.className || '';
        return className.includes('h-6') && className.includes('w-11');
      });
    }
    expect(toggle).toBeTruthy();
    if (toggle) fireEvent.click(toggle);
    expect(onSettingsChange).toHaveBeenCalledWith({
      notifications: { newLead: false, followUp: false },
    });
  });

  it('calls onClearAll when Tüm Verileri Sil clicked', () => {
    const onClearAll = vi.fn();
    render(<ProfilPaneli {...defaultProps} onClearAll={onClearAll} />);
    fireEvent.click(screen.getByText('Tüm Verileri Sil'));
    expect(onClearAll).toHaveBeenCalled();
  });

  it('renders avatar fallback when no avatar provided', () => {
    render(<ProfilPaneli {...defaultProps} />);
    expect(screen.getByText('person')).toBeInTheDocument();
  });

  it('displays notification section title and description', () => {
    render(<ProfilPaneli {...defaultProps} />);
    expect(screen.getByText('Bildirimler')).toBeInTheDocument();
    expect(screen.getByText('E-posta ve sistem uyarıları')).toBeInTheDocument();
  });
});
