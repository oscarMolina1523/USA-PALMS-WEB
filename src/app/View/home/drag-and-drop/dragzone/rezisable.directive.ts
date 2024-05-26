import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appResizable]'
})
export class ResizableDirective {
  private originalWidth: number = 0;
  private originalHeight: number = 0;
  private originalX: number = 0;
  private originalY: number = 0;
  private originalMouseX: number = 0;
  private originalMouseY: number = 0;
  private minimumSize: number = 20;

  constructor(private el: ElementRef) {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    event.preventDefault();
    const element = this.el.nativeElement;
    this.originalWidth = parseFloat(getComputedStyle(element).width.replace('px', ''));
    this.originalHeight = parseFloat(getComputedStyle(element).height.replace('px', ''));
    this.originalX = element.getBoundingClientRect().left;
    this.originalY = element.getBoundingClientRect().top;
    this.originalMouseX = event.pageX;
    this.originalMouseY = event.pageY;
    window.addEventListener('mousemove', this.resize.bind(this));
    window.addEventListener('mouseup', this.stopResize.bind(this));
  }

  resize(event: MouseEvent) {
    const element = this.el.nativeElement;
    if (element.classList.contains('bottom-right')) {
      const width = this.originalWidth + (event.pageX - this.originalMouseX);
      const height = this.originalHeight + (event.pageY - this.originalMouseY);
      if (width > this.minimumSize) {
        element.style.width = width + 'px';
      }
      if (height > this.minimumSize) {
        element.style.height = height + 'px';
      }
    } else if (element.classList.contains('bottom-left')) {
      const height = this.originalHeight + (event.pageY - this.originalMouseY);
      const width = this.originalWidth - (event.pageX - this.originalMouseX);
      if (height > this.minimumSize) {
        element.style.height = height + 'px';
      }
      if (width > this.minimumSize) {
        element.style.width = width + 'px';
        element.style.left = this.originalX + (event.pageX - this.originalMouseX) + 'px';
      }
    } else if (element.classList.contains('top-right')) {
      const width = this.originalWidth + (event.pageX - this.originalMouseX);
      const height = this.originalHeight - (event.pageY - this.originalMouseY);
      if (width > this.minimumSize) {
        element.style.width = width + 'px';
      }
      if (height > this.minimumSize) {
        element.style.height = height + 'px';
        element.style.top = this.originalY + (event.pageY - this.originalMouseY) + 'px';
      }
    } else {
      const width = this.originalWidth - (event.pageX - this.originalMouseX);
      const height = this.originalHeight - (event.pageY - this.originalMouseY);
      if (width > this.minimumSize) {
        element.style.width = width + 'px';
        element.style.left = this.originalX + (event.pageX - this.originalMouseX) + 'px';
      }
      if (height > this.minimumSize) {
        element.style.height = height + 'px';
        element.style.top = this.originalY + (event.pageY - this.originalMouseY) + 'px';
      }
    }
  }

  stopResize() {
    window.removeEventListener('mousemove', this.resize.bind(this));
  }
}
