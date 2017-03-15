'use strict';
import React from 'react';
import { connect } from 'react-redux';
import InstagramEmbed from 'react-instagram-embed';
import LazyLoad from 'react-lazyload'

const animals = ['https://www.instagram.com/p/BRf8fYeDH5G/', 'https://www.instagram.com/p/BRi-8y_hMg4/', 'https://www.instagram.com/p/BRjWVi2Fp-I/', 'https://www.instagram.com/p/BRjut9dl5c1/', 'https://www.instagram.com/p/BRjDqTbB8kg/', 'https://www.instagram.com/p/BMAkUwqhrr6/', 'https://www.instagram.com/p/BCSzBe4nPXD/', 'https://www.instagram.com/p/3jrViEHPcz/']

const Cuteness = () => {

	return (
        <div className="container">
				<div className="row">
                    <div className="col s6 offset-s3">
                    {
                        animals.map(function(animal, i){
                            return (
                                <LazyLoad key={i} height={200}>
                                    <InstagramEmbed url ={`${animal}`} maxWidth={500} />
                                </LazyLoad>
                            )
                        })
                    }
				    </div>
			</div>
		</div>
	)
}

const mapState = ({}) => ({})
const mapDispatch = () => ({})

export default connect(mapState, mapDispatch)(Cuteness);
