import {Component, OnInit} from '@angular/core';

/**
 * Displays start page
 */
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  /** App title */
  title = 'amphibian7';

  //
  // Lifecycle hooks
  //

  /**
   * Handles on-init lifecycle phase
   */
  ngOnInit() {
  }
}
