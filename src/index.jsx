/*!
 * Copyright (C) 2018, Yeahzhu Tech Club - https://yeahzhu.com
 * 
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { m } from './js/main.jsx';

import './css/main.scss';

class HeaderWidget {

  constructor(page) { // the constructor
    this.page = page
  }

  view(vnode) {
    return [(
      <header>
        <h1>Yeazhu Tech Club</h1>
      </header>
    )]
  }

  oncreate() {
    console.log("Header Created!")
  }

}

class FooterWidget {

  constructor(page) { // the constructor
    this.page = page
  }

  view(vnode) {
    return [(
      <footer>
        <div> &copy; 2008-2018, Yeazhu Tech Club</div>
      </footer>
    )]
  }

  oncreate() {
    console.log("Footer Created!")
  }

}

class PageWidget {

  constructor(page) { // the constructor
    this.page = page
  }

  view(vnode) {
    var contentId = m.route.get()
    console.log("Route contentId: ", contentId)
    var contentNode = null
    if (contentId.indexOf('/sharing') == 0) {
      contentNode = sharingNode
    }
    return [(
      m(new HeaderWidget(this.page))
    ),(
      contentNode
    ),(
      m(new FooterWidget(this.page))
    )]
  }
}

var pageWidget = new PageWidget(null);
m.route(document.body, "/", {
  "/": pageWidget,
  "/:homepage...": pageWidget,
  "/signin/:signin...": pageWidget,
  "/sharing/:article...": pageWidget,
  "/example/:example...": pageWidget,
  "/aboutus/:aboutus...": pageWidget
})
