import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { LoadingDataComponent } from './loading-data/loading-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-children-loading-dialog';
  loadingOverlayRef: OverlayRef;

  private targetNumberOfComponentsToLoad = 3;
  private currentNumberOfComponentsLoaded = 0;


  constructor(    
    public overlay: Overlay,
    public viewContainerRef: ViewContainerRef
) { 
  
}
  ngOnInit(): void {
    this.openLoadingPanel();
  }

  childComplete(caller: number) {

    this.currentNumberOfComponentsLoaded += caller;

    if (this.currentNumberOfComponentsLoaded === this.targetNumberOfComponentsToLoad) {
      this.closeLoadingPanel();
    }

  }


  
  openLoadingPanel() {
    const config = new OverlayConfig();

    config.positionStrategy = this.overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically();

    config.hasBackdrop = true;
    this.loadingOverlayRef = this.overlay.create(config);


  this.loadingOverlayRef.attach(new ComponentPortal(LoadingDataComponent, this.viewContainerRef));

  }


  closeLoadingPanel() {
    this.loadingOverlayRef.dispose();
  }


  togglePanel() {

    this.openLoadingPanel();
    setTimeout(() => {
      this.closeLoadingPanel()
    }, 5000);
  }
}
