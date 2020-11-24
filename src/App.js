import './App.css';
import React, { Component } from 'react';
import TextHover from './Component/TextHover';
import RubiksCube from './assets/RubiksCube.png';
import Snooker from './assets/Snooker.jpg';
import Code from './assets/Code.jpg';
import Pencil from './assets/Pencil.png';
import { Animated } from 'react-animated-css';

class App extends Component {
	state = {
		hovering: 0,
		background: null,
		loader: 1,
		logoCollapser: {},
	};
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				logoCollapser: {
					borderRadius: '100%',
					marginLeft: '20px',
					marginTop: '5px',
					width: '0',
					height: '0',
					color: 'transparent',
				},
			});
		}, 1000);
		setTimeout((s) => {
			this.setState({ loader: 0 });
		}, 2000);
	}
	mouseEntered = (event) => {
		this.setState({ hovering: 1, background: event.target.id });
	
	};
	mouseLeft = (event) => {
		this.setState({ hovering: 0, background: null });
	};

	render() {
	

		let blueSlider = {};
		let backGround = {
			opacity: '0',
			background: `url(${this.state.background})`,
			
		};
		let headLine = {};
		

		let footer = {};
		if (this.state.hovering) {
			blueSlider = {
				backgroundPosition: '100% 0',
			
			};
			backGround = {
				background: `url(${this.state.background})`,
				opacity: '1',
				backgroundSize: 'cover',
				backgroundPosition: 'unset',
				zIndex: '5',
				transform: 'scale(1.1,1.1)',
			};
			headLine = {
				width: '100%',
			};

			footer = { transform: 'translateY(-3.5vw)'};
		
		}

		let Screen = (
			<div className='App'>
				<div className='Loader' style={{ ...this.state.logoCollapser }}>
					<Animated
						animationIn='slideInUp'
						isVisible={true}
						animationInDuration='1000'>
						<div>
							<h3>Hey, this is Pranay and you are watching my portfolio!</h3>
						</div>
					</Animated>
				</div>
			</div>
		);

		if (!this.state.loader) {
			Screen = (
				<div className='App'>
					<nav>
						<div className='Logo'>
							<div className='red'>B</div>
						</div>
						<span className='Projects'>
							<h4>
								Hobbies{' '}
								<span className='Headline' style={headLine}>
									Hobbies{' '}
								</span>
							</h4>
						</span>
						<div className='Menu'>
							<p>
								More <span>//</span>
							</p>
						</div>
					</nav>
					<div className='Background' style={backGround}></div>
					<div className='BlueSlider' style={blueSlider}></div>

					<div className='MainContainer'>
						{' '}
						<TextHover
							id={RubiksCube}
							text='Cube'
							MouseEntered={this.mouseEntered}
							MouseLeft={this.mouseLeft}
							hoverActive={this.state.hovering}
						/>
						<TextHover
							id={Snooker}
							text='Snooker'
							MouseEntered={this.mouseEntered}
							MouseLeft={this.mouseLeft}
							hoverActive={this.state.hovering}
						/>
						<TextHover
							id={Code}
							text='Code'
							MouseEntered={this.mouseEntered}
							MouseLeft={this.mouseLeft}
							hoverActive={this.state.hovering}
						/>
						<footer>
							<Animated
								animationIn='slideInUp'
								animationInDuration='100'
								isVisible={true}
								animationOutDuration='100'
								animationIn='slideInUp'>
								<div className='Footer' style={footer}>
									<p>Pranay Simejiya@BITS Pilani</p>
								</div>
								<div className='Footer2' style={footer} >
									<p>f20190267@pilani.bits-pilani.ac.in</p>
								</div>
							</Animated>
						</footer>
						<div className='Pencil'>
							<img src={Pencil} alt='' />
						</div>
					</div>
				</div>
			);
		}
		return Screen;
	}
}

export default App;
