


import * as React from 'react';
import { Modal, AdapterTag, Button, CardInner } from '..';
import { Link } from 'react-router-dom';
import BackLink from '../BackLink';
import styled from 'styled-components';

class AdapterModal extends React.Component {
    render() {
        return (
            <Modal>
                <div>
                    <Link to="/adapters"><BackLink>Back to Adapters</BackLink></Link>
                    <Title>{this.props.title}</Title>
                    <Subtitle>{this.props.subtitle}</Subtitle>
                    {this.props.tags.map((tag, index) => <AdapterTag key={`label-${index}`} label={tag} startColor="#9277EE" endColor="#874AE2" />)}
                </div>
                <Description>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula eu turpis eget auctor. Cras sit amet aliquam enim. Nulla finibus magna vel pretium auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at mi tincidunt, gravida nibh sed, sagittis sem. Fusce aliquet magna erat, vitae elementum nulla auctor nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque eget turpis vel risus tincidunt fringilla volutpat eleifend neque.</p>

                <p>Ut et mauris eget arcu scelerisque molestie. Donec auctor mattis turpis. Donec maximus vulputate iaculis. Integer id molestie odio, eget venenatis ipsum. Vestibulum dapibus quam finibus semper tempus. Nam facilisis tincidunt tortor ac tempus. Morbi eros lorem, tristique ut mi et, scelerisque accumsan sem. Mauris eros neque, faucibus in varius a, mollis a dui. Morbi dolor nunc, ullamcorper sit amet venenatis id, egestas a justo. Sed id felis orci.</p>

                <p>Sed quis rutrum turpis, in tristique mauris. Vivamus vulputate vel nulla in tempor. Integer eu imperdiet nisl. Quisque interdum lorem at magna varius, rhoncus ornare ante pharetra. Aenean sed sapien tincidunt, rhoncus magna quis, lacinia libero. Quisque ultrices, lectus ac iaculis tempus, enim elit imperdiet ex, eu blandit lorem libero tempus metus. Vivamus nunc felis, cursus nec massa eu, pretium porta erat. Morbi posuere quam nec augue ultrices tempor. Sed vitae rutrum mauris. Cras finibus, enim sit amet lacinia aliquam, augue augue auctor dolor, id luctus risus justo eu lorem.</p>

                <p>Nullam aliquam tincidunt malesuada. Nunc id efficitur magna, ut accumsan eros. Donec eget lectus et dolor sollicitudin faucibus. Integer et nulla sollicitudin nunc vehicula semper et ac nibh. Vestibulum venenatis purus sed tellus facilisis lobortis. Nulla facilisi. Nulla ac pretium odio. Maecenas ut magna quis nisl egestas faucibus a at odio. Aliquam suscipit nisl vel scelerisque ornare. Aliquam consequat justo suscipit risus luctus, ut suscipit metus aliquet. Nam vestibulum tincidunt libero vel vulputate. Aliquam suscipit justo nec malesuada fermentum. Mauris a malesuada turpis. Nunc sit amet porttitor urna. Sed nec mauris mattis, vestibulum elit sed, egestas est. Phasellus iaculis fringilla neque, ac semper ante pulvinar non.</p>

                <p>Quisque euismod libero odio, non porta lorem venenatis at. Etiam vel sapien ipsum. Quisque ut nisl et tellus auctor rutrum ac vel risus. Praesent quis velit risus. Sed at metus eu ex laoreet scelerisque. Nam egestas augue et tellus fermentum elementum. Nam mollis turpis nec justo placerat, non luctus ipsum fermentum.</p>
                </Description>
                <div>
                    <Button>Settings</Button>
                </div>
            </Modal>
        );
    }
}

const Title = styled.div` 
font-size: 20px;
color: ${props => props.theme.text.primary};
`;

const Subtitle = styled.div` 
font-size: 18px;
color: ${props => props.theme.text.secondary};
`;

const Description = styled.div`
max-height: 300px;
overflow-y: scroll;
overscroll-behavior: none;
margin: -15px;
padding: 0 15px;
color: ${props => props.theme.text.primary};
`;

export default AdapterModal;
