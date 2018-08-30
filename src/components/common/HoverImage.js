import React, {Component} from 'react';
import { HoverImageContainer, BackgroundImage, PlayImage, DeleteImage } from "./HoverImage.style";


class HoverImage extends Component {
    render = () => {
        const { id, bgImg, size, playImg, deleteImg, onClick } = this.props;
        return (
            <HoverImageContainer id={id}
                                 onMouseOver={() => this.MouseOver()}
                                 onMouseLeave={() => this.MouseLeave()}
            >
                <BackgroundImage id='background-image' src={bgImg} width={size} height={size} alt=''/>

                {this.props.children}

                <PlayImage id='play-image' src={playImg} alt='Play' comp={this}
                           onClick={() => onClick()}
                />
                {deleteImg &&
                    <DeleteImage id='delete-image' src={deleteImg} alt='del' comp={this}/>
                }
            </HoverImageContainer>
        );
    };
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
        };
    }
    MouseOver = () => {
        this.setState({hover: true});
    };
    MouseLeave = () => {
        this.setState({hover: false});
    };
}
export default HoverImage;
