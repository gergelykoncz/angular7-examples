import * as $ from 'jquery';
import 'emojionearea';

import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appEmoji]'
})
export class EmojiDirective implements AfterViewInit {
  constructor(private element: ElementRef) {}

  ngAfterViewInit() {
    $(this.element.nativeElement).emojioneArea({
      autocomplete: false
    });
  }
}
