//src/components/Searcher.jsx

import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../slices/dataSlice';

const Searcher = () => {
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        dispatch(setSearchTerm(e.target.value));
    };

    return(
            <Input.Search 
            placeholder='Search' 
            onChange={handleSearch}
            style={{ marginBottom: 10 }}
        />
    );
}

export default Searcher;