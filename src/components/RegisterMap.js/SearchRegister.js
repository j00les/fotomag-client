import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const SearchRegister = ({ handleCoordinate, region }) => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data);
        // console.log(details, "muncul sih");
        const { lat: latitude } = details.geometry.location;
        const { lng: longitude } = details.geometry.location;

        handleCoordinate({ latitude, longitude });
      }}
      query={{
        key: "AIzaSyAkNQFV5IHPqRcPUwy2eibkgMyYjy0Et20",
        language: "en",
      }}
      GooglePlacesDetailsQuery={{
        fields: "geometry",
      }}
    />
  );
};

export default SearchRegister;
