import React from 'react'

class Home extends React.Component {
	static displayName = 'Home'

	render () {
		return (
			<div className="Home">
				<section className="Home-splash-wrapper">

					<ul className="Home-slideshow">
						<li><span>Image 01</span></li>
						<li><span>Image 02</span></li>
						<li><span>Image 03</span></li>
						<li><span>Image 04</span></li>
						<li><span>Image 05</span></li>
						<li><span>Image 06</span></li>
					</ul>

					<div className="Home-signup">
						<div id="mc_embed_signup">

						<form action="//institute.us13.list-manage.com/subscribe/post?u=be97a055297425f6c6441ba8f&amp;id=2302465831"
								method="post" id="mc-embedded-subscribe-form"
								name="mc-embedded-subscribe-form"
								className="validate"
								target="_blank" noValidate>

							<div id="mc_embed_signup_scroll">
									<div className="Home-logo"></div>

									<div className="mc-field-group">
										<strong><label htmlFor="mce-EMAIL">Email Address </label></strong>
										<div className="emailbox">
											<input
														 style={{'background-color': 'rgba(250, 250, 250, 0.35)'}}
														 type="email"
														 value=""
														 name="EMAIL"
														 className="required email"
														 id="mce-EMAIL"/>
										</div>
									</div>

									<div className="mc-field-group input-group">
										<strong>Choose Location(s): </strong>
										<ul>
											<li>
												<input type="checkbox" value="1" name="group[2605][1]" id="mce-group[2605]-2605-0"/>
												<label htmlFor="mce-group[2605]-2605-0">IRL Miami</label>
											</li>
											<li>
												<input type="checkbox" value="2" name="group[2605][2]" id="mce-group[2605]-2605-1"/>
												<label htmlFor="mce-group[2605]-2605-1">IRL New York</label>
											</li>
										</ul>
									</div>

									<div id="mce-responses" className="clear">
										<div className="response" id="mce-error-response" style={{'display': 'none'}}></div>
										<div className="response" id="mce-success-response" style={{'display':'none'}}></div>
									</div>

									<div style={{'position': 'absolute', 'left': '-5000px'}} aria-hidden="true">
										<input type="text" name="b_be97a055297425f6c6441ba8f_2302465831" tabIndex="-1" value=""/>
									</div>

									<div className="clear submit">
										<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>
									</div>
							</div>

						</form>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default Home