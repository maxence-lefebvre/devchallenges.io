import { getDropZone } from '../support/app.po';

describe('image-uploader', () => {
  beforeEach(() => cy.visit('/'));

  it('should validate the US: I can drag and drop an image to upload it', () => {
    expect(cy.contains('Upload your image')).to.exist;

    getDropZone().attachFile('cat-picture.jpg', {
      subjectType: 'drag-n-drop',
    });

    expect(cy.contains('Uploading...')).to.exist;
    expect(cy.contains('Uploaded Successfully!')).to.exist;
  });
});
