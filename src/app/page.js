// Import area

import A from "./ui/A";

// import defaultImport from 'some library/location';
// import Image from 'next/image'
// import styles from './page.module.css'

// Definition area
function Home() {
  return (
    <>
      <main>
        <h1>Home pages</h1><br/><br/>
        <A message="Welcome to Oklabs" />
      </main>
    </>
  );
}

// Export area

//1. Default export
export default Home;
