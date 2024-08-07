import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<img
					src={logo}
					alt="jobster logo"
					className="logo"
				/>
			</nav>
			<div className="container page">
				<div className="info">
					<h1>
						job <span>tracking</span> app
					</h1>
					<p>
						Blackrocks Brewery is a craft brewery in Marquette, Michigan, United States. Taking the name from a local
						landmark, former pharmaceutical salesmen David Manson and Andy Langlois opened Blackrocks in 2010. They
						originally brewed their products in the basement of a Victorian-style house and used the building's other
						two floors as a taproom.
					</p>
				</div>
				<img
					src={main}
					alt="jobster main"
					className="img main-img"
				/>
			</div>
		</Wrapper>
	)
}

export default Landing
