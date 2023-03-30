import './LearningPath.css';
import closeButtonIcon from '../Images/close-button.png';

function Learningpath(props) {

	const stepDetails = [
		{
			name: "Getting started with the web",
			url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web"
		},
		{
			name: "Learning web technologies like HTML & CSS",
			url: "https://developer.mozilla.org/en-US/docs/Learn/CSS"
		},
		{
			name: "Understanding concepts of JavaScript",
			url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript"
		},
		{
			name: "Learning React",
			url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started"
		},
		{ name: "Building small application" }
	];

	function closePopUpHandler() {
		props.setTrigger(false);
	}

	return (props.trigger) ? (
		<div className='learning-path'>
			<div className='learning-path-heading'>
				<div>Learning Path</div>
				<div><img alt='close_button_icon' src={closeButtonIcon} onClick={closePopUpHandler}></img></div>

			</div>
			{stepDetails.map((data) => {
				return (
					<a href={data.url} rel="noopener"><div className='steps'>{data.name}</div></a>
				)
			})
			}
		</div>
	) : "";
}

export default Learningpath;