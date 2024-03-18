import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogGrid from "./HogGrid";
import FilterHogs from "./FilterHogs";
import SortHog from "./SortHog";

function App() {
	const [filter, setFilter] = useState("All");
	const [sort, setSort] = useState("none");
	return (
		<div className="App">
			<Nav />
			<FilterHogs filter={filter} onChangeFilter={setFilter} />
			<SortHog sort={sort} onChangeSort={setSort} />
			<HogGrid hogs={hogs} filter={filter} sort={sort} />
		</div>
	);
}

export default App;