import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUniversities } from "../../api/fetchUniversities";
import Card from "../../components/Card";

const UniversityResults = () => {
    const {country } = useParams(); // ვიღებთ ქვეყანას URL-იდან
    const [universities, setUniversities] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!country) return;

        setLoading(true);
        fetchUniversities(country)
            .then((data) => setUniversities(data))
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    }, [country]);
    const navigate = useNavigate()
    return (
        <div>
            <h2>{country} - University</h2>
            {loading && <p>Loading...</p>}
            <button onClick={()=>navigate(-1)}>Go back</button>
            {error && <p style={{ color: "red" }}>{error}</p>}

            <div>
                {universities.map((uni, index) => (
                    <Card key={index} props={uni} />
                ))}
            </div>
        </div>
    );
};

export default UniversityResults;