import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Repo } from '../../entities';

@Component({
  selector: 'app-repo',
  templateUrl: './ui.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepoComponent {
  @Input() repo: Repo;
}
