import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const SearchMap = ({ handleCoordinate, region }) => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        const { lat: latitude } = details.geometry.location;
        const { lng: longitude } = details.geometry.location;

        handleCoordinate({ latitude, longitude });
        // setRegion({ ...region, markers: { latitude, longitude } });
      }}
      query={{
        key: 'AIzaSyAkNQFV5IHPqRcPUwy2eibkgMyYjy0Et20',
        language: 'en',
      }}
      GooglePlacesDetailsQuery={{
        fields: 'geometry',
      }}
    />
  );
};

export default SearchMap;
