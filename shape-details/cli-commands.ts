
export type TCommandAvailability = 'builtin' | 'npm' | 'external';

export type TCommandShell = 'bash' | 'zsh' | 'sh' | 'fish' | 'powershell' | 'cmd' | 'pwsh' | 'node' | 'cross-shell';

export type TCommandRisk = 'safe' | 'warning' | 'destructive';

export type TCommandPlatform = 'macos' | 'linux' | 'windows' | 'wsl' | 'cross-platform';

export type TCommandDefinition = {
  id: string;
  title: string;
  command: string;
  description: string;
  exampleOutput: string;
  tags: string[];
  platform: TCommandPlatform[];
  shell: TCommandShell;
  availability: TCommandAvailability;
  risk: TCommandRisk;
  notes: string[];
  links: string[];
}
