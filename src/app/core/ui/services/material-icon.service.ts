import {Injectable} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

/**
 * Represents icon topic subdirectory
 */
enum IconTopic {
  ACTION = 'action',
  ALERT = 'alert',
  AV = 'av',
  CONTENT = 'content',
  COMMUNICATION = 'communication',
  DEVICE = 'device',
  EDITOR = 'editor',
  FILE = 'file',
  HARDWARE = 'hardware',
  IMAGE = 'image',
  MAPS = 'maps',
  NAVIGATION = 'navigation',
  SOCIAL = 'social'
}

/**
 * Represents a material design icon
 */
class Icon {
  /** Topic */
  topic: IconTopic;
  /** Name */
  name: string;
  /** File */
  file: string;

  /**
   * Constructor
   * @param topic topic
   * @param name icon name
   * @param file icon file name
   */
  constructor(topic: IconTopic, name: string, file: string) {
    this.topic = topic;
    this.name = name;
    this.file = file;
  }
}

/**
 * Handles Material icons
 */
@Injectable({
  providedIn: 'root'
})
export class MaterialIconService {

  /** Root directory of material design icons */
  private ICON_ROOT_DIR = '../assets/material-design-icons';
  /** Icon variant */
  private VARIANT = 'production';
  /** List of icons */
  private icons: Icon[] = [
    {topic: IconTopic.ACTION, name: 'add', file: 'ic_add_24px.svg'}
  ];

  /**
   * Initializes icons
   *
   * @param iconRegistry icon registry
   * @param sanitizer sanitizer
   */
  public initializeIcons(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.icons.forEach(icon => {
      iconRegistry.addSvgIcon(icon.name,
        sanitizer.bypassSecurityTrustResourceUrl(this.ICON_ROOT_DIR + '/' + icon.topic + '/svg/' + this.VARIANT + '/' + icon.file));
    });
  }
}
