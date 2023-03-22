import './Header.css';

function Header() {
    return (
        <div className='header'>
            <div className='app-name'>Edwisely</div>
            <div className='about-us'>About Us</div>
            <div className='description'>
                <span className='app-description'>Transforming Indian<br></br>Engineering Institutes into<br></br>AI-Powered Learning Campuses</span>
                <div className='line'></div>
                <span className='app-description-2'>With Edwisely’s AI-Driven Hybrid Learning and Career<br></br>platform for Engineering Students</span>
            </div>
        </div>
    );
}

export default Header;