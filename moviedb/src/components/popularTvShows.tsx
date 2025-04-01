import { useFetchPopularTvShowsQuery } from "../store";
import TvShowCard from "./tvShowCard";
import React from 'react';

function PopularTvShowList(){

    const {data, error, isFetching } = useFetchPopularTvShowsQuery();

    console.log(data, error, isFetching);


    let content;
    if (isFetching) {
        content = <div>Loading;</div>
    } else if (error) {
        content = <div>Error loading tv shows.</div>;
    } else {
        content = data?.map((tvShow) => {
            return <TvShowCard key={tvShow.id} tvShow={tvShow}></TvShowCard>
        });
    }
    return (
        <div className="row row-cols-3 row-cols-md-2 m-4">
            {content}
        </div>
    );
}
export default PopularTvShowList;