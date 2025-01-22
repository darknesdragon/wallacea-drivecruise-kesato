// // pages/static-api-page.tsx

// export const GetStaticProps = async () => {
//     try {
//         const response = await fetch('https://api.npoint.io/185d3f3885f04727620f');
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         return {
//             props: {
//                 data,
//             },
//             revalidate: 60,
//         };
//     } catch (error) {
//         console.error('Failed to fetch data:', error);
//         return {
//             props: {
//                 data: null,
//             },
//         };
//     }
// };


// const StaticApiPage = ({ data }: { data: any }) => {
//     console.log('Fetched data:', data);
//     if (!data) {
//         return <div>Error loading data</div>;
//     }
//     return (
//         <div>
//             <h1>Static Data from API</h1>
//             <pre>{JSON.stringify(data, null, 2)}</pre>
//         </div>
//     );
// };


// export default StaticApiPage;

const testing = () => {
    return (
        <div className="container">
            testing
        </div>
    )
}

export default testing