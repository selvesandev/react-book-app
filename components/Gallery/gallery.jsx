import React, {Component} from 'react';

class Gallery extends Component {
    render() {
        let notFound = 'https://mosaikweb.com/wp-content/plugins/lightbox/images/No-image-found.jpg';
        return (
            <div>
                {
                    this.props.items.map((item, index) => {
                        let {title, imageLinks, infoLinks} = item.volumeInfo;
                        return (
                            <div key={index} className="book">
                                <img
                                    src={imageLinks !== undefined ? imageLinks.thumbnail : notFound}
                                    alt="Book Image"
                                    className="book-image"
                                />
                                <div className="book-text">
                                    {title}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Gallery;