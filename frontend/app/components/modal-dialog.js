import Ember from 'ember';
import ModalDialog from 'ember-modal-dialog/components/modal-dialog';

export default ModalDialog.extend({
  tagName: 'div',
  didRender: function() {
    this._refreshWindowScroll();
  },
  didDestroyElement: function() {
    Ember.run.next(() => {
      this._refreshWindowScroll();
    });
  },
  _refreshWindowScroll: function() {
    if (this._thereIsNoOpenModals()) {
      this._unlockWindowScroll();
    } else {
      this._lockWindowScroll();
    }
  },
  _lockWindowScroll: function() {
    Ember.$('body').addClass('scroll-locked');
  },
  _unlockWindowScroll: function() {
    Ember.$('body').removeClass('scroll-locked');
  },
  _thereIsNoOpenModals: function() {
    return Ember.$('#modal-overlays').html() === '';
  }
});
