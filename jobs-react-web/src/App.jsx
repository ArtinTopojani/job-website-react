import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCard from './components/HomeCard';
import JobListings from './components/JobListings';

function App() {
  return (
    <>
      <Navbar />
      <Hero
        title='Become a React Dev'
        description='Find the React job that fits your skills and needs'
      />
      <HomeCard />
      <JobListings />

      <section className='m-auto max-w-lg my-10 px-6'>
        <a
          href='jobs.html'
          className='block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700'
        >
          View All Jobs
        </a>
      </section>
    </>
  );
}

export default App;
