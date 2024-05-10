import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className=' mb-24 mt-9 flex flex-col lg:flex-row gap-6'>
            <div className='lg:w-1/2 relative'>
                <img className='w-3/4 rounded-xl' src={person} alt="" />
                <img className='w-1/2 right-5 top-1/2 absolute rounded-xl border-8 border-white' src={parts} alt="" />
                {/* <p className='border bottom-16 w-1/2 absolute'>hello</p> */}
            </div>
            <div className='lg:w-1/2 space-y-4'>
                <h4 className='font-bold text-orange-500'>About Us</h4>
                <h2 className='text-2xl font-bold'>We are qualified <br /> & of experience <br /> in this field</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className='py-2 px-4 text-white bg-orange-700'>Get More Info</button>
            </div>
        </div>
    );
};

export default About;