'use strict';

module.exports = function(GulpAngularGenerator) {

  /**
   * Add files of the navbar and the main view depending on the ui framework
   * and the css preprocessor
   */
  GulpAngularGenerator.prototype.uiFiles = function uiFiles() {

    this.files.push({
      src: 'src/app/shared/navbar/partials',
      dest: 'src/app/shared/navbar/partials',
      template: true
    });

    this.files.push({
      src: 'src/app/components/home/partials',
      dest: 'src/app/components/home/partials',
      template: true
    });

    this.files.push({
      src: 'src/app/_' + this.props.ui.key + '/__' + this.props.ui.key + '-index.' + this.props.cssPreprocessor.extension,
      dest: 'src/app/index.' + this.props.cssPreprocessor.extension,
      template: true
    });

  };

};
