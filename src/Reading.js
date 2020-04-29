import React from 'react';
import ShelfOptions from './ShelfOptions.js'

class Reading extends React.Component{
  state = {
    books: [
      {
        image: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
        title: "To Kill a Mockingbird",
        author: "Harper Lee"
      },
      {
        image: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")',
        title: "Ender's Game",
        author: "Orson Scott Card"
      },
    ],
  }

  render(){
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">TODO:: Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              this.state.books.map((book) => (
                <li>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.image }}></div>
                      <ShelfOptions />
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.author}</div>
                  </div>
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Reading