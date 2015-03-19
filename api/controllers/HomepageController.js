/**
 * HomepageController
 *
 * @description :: Server-side logic for managing homepages
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {



  /**
   * `HomepageController.index()`
   */
  index: function (req, res) {
    return res.view();
  }
};

