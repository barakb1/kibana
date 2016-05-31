import _ from 'lodash';
import Processor from '../base/view_model';

export class Gsub extends Processor {
  constructor(processorId, oldProcessor) {
    super(
      processorId,
      'gsub',
      'Gsub',
      `Converts a string field by applying a regular expression and a replacement.`
    );

    _.defaults(
      this,
      _.pick(oldProcessor, [
        'sourceField',
        'pattern',
        'replacement'
      ]),
      {
        sourceField: '',
        pattern: '',
        replacement: ''
      }
    );
  }

  get description() {
    const source = this.sourceField || '?';
    return `[${source}] - /${this.pattern}/ -> '${this.replacement}'`;
  }

  get model() {
    return {
      processorId: this.processorId,
      typeId: this.typeId,
      sourceField: this.sourceField || '',
      pattern: this.pattern || '',
      replacement: this.replacement || ''
    };
  }
};
