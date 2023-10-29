// backend.jsx

import { sanityClient } from "./sanity.config";
import { sendEmail } from "./email";

const booking = async (values) => {
  const { name, sex, age, gmail, typeOfConsultation, dateOfBooking } = values;

  const query = `
    mutation {
      createBooking(
        data: {
          name: "${name}",
          sex: "${sex}",
          age: ${age},
          gmail: "${gmail}",
          typeOfConsultation: "${typeOfConsultation}",
          dateOfBooking: "${dateOfBooking}"
        }
      ) {
        id
      }
    }
  `;

  const response = await sanityClient.fetch(query);

  if (response.createBooking.id) {
    message.success("Booking successful!");

    // Send email to doctor
    sendEmail(
      "lakshmi.sudheera2021@vitstudent.ac.in",
      "New booking for " + dateOfBooking,
      `
        Name: ${name}
        Sex: ${sex}
        Age: ${age}
        Gmail ID: ${gmail}
        Type of Consultation: ${typeOfConsultation}
        Date of Booking: ${dateOfBooking}
      `
    );
  } else {
    message.error("Something went wrong. Please try again later.");
  }
};
