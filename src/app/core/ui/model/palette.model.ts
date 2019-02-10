import {Hue} from './hue.model';
import {PaletteType} from './palette-type.enum';

/**
 * Material palette of different hues
 */
export class MaterialPalette {

  /** MaterialPalette type */
  type: PaletteType;
  /** List of hues */
  hues: Hue[] = [];

  /**
   * Constructor
   * @param type palette type
   */
  constructor(type: PaletteType) {
    this.type = type;
  }
}
