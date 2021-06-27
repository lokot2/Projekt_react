import React, {useEffect, useState} from 'react';

import { Tag, Entity, Fee } from 'types';

type UserContextType = {
  name: string,
  workPosition: string,
  company: string,
  city: string,
  email: string,
  profileImage: string,
  phone: string,
  hourlyFee: string,
  termsAndConditions: string,
  servicesAndProjects: string,
  profileTags: Tag[],
  proposals: Entity[],
  reviews: Entity[],
  fees: Fee[],
  correspondants: string[],

  setName: (value: string) => void,
  setWorkPosition: (value: string) => void,
  setCompany: (value: string) => void,
  setCity: (value: string) => void,
  setEmail: (value: string) => void,
  setProfileImage: (value: string) => void,
  setPhone: (value: string) => void,
  setHourlyFee: (value: string) => void,
  setTermsAndConditions: (value: string) => void,
  setServicesAndProjects: (value: string) => void,
  setProfileTags: (value: Tag[]) => void,
  addProfileTag: (value: string, category: string) => void,
  removeProfileTag: (id: number) => void,
};

export const ProfileContext = React.createContext<UserContextType>({
  name: '',
  workPosition: '',
  company: '',
  city: '',
  email: '',
  profileImage: '',
  phone: '',
  hourlyFee: '',
  termsAndConditions: '',
  servicesAndProjects: '',
  profileTags: [],
  proposals: [],
  reviews: [],
  fees: [],
  correspondants: [],

  setName: () => {},
  setWorkPosition: () => {},
  setCompany: () => {},
  setCity: () => {},
  setEmail: () => {},
  setProfileImage: () => {},
  setPhone: () => {},
  setHourlyFee: () => {},
  setTermsAndConditions: () => {},
  setServicesAndProjects: () => {},
  setProfileTags: () => {},
  addProfileTag: () => {},
  removeProfileTag: () => {}
});

interface Props {
  children: React.ReactNode;
}

const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [name, setName] = useState<string>('');
  const [workPosition, setWorkPosition] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [profileImage, setProfileImage] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [hourlyFee, setHourlyFee] = useState<string>('');
  const [termsAndConditions, setTermsAndConditions] = useState<string>('');
  const [servicesAndProjects, setServicesAndProjects] = useState<string>('');
  const [profileTags, setProfileTags] = useState<Tag[]>([]);
  const [proposals, setProposals] = useState<Entity[]>([]);
  const [reviews, setReviews] = useState<Entity[]>([]);
  const [fees, setFees] = useState<Fee[]>([]);
  const [correspondants, setCorrespondants] = useState<string[]>([]);

  const addProfileTag = (value: string, category: string) => {
    setProfileTags(profileTags.concat({
      id: profileTags.length,
      name: value,
      category
    }));
  }

  const removeProfileTag = (id: number) => {
    setProfileTags(profileTags.filter(tag => tag.id !== id));
  }

  useEffect(() => {
    setHourlyFee('610€/hour (Negotiated)');
    setTermsAndConditions('Monthly 10k€ retainer - see with Jeanny Smith');
    setServicesAndProjects('Corporate M&A and international acquisitions');
    setProfileTags([
      {name: 'Human Resource Specialist', id: 0, category: 'expertise'},
      {name: 'Market Research Analyst', id: 1, category: 'expertise'},
      {name: 'Epidemiologist', id: 2, category: 'specialities'},
      {name: 'Occupational Therapist', id: 3, category: 'specialities'},
      {name: 'Software Developer', id: 4, category: 'admissions'},
      {name: 'Diagnostic Medical Sonographer', id: 5, category: 'admissions'},
      {name: 'Interpreters and Translators', id: 6, category: 'countries'},
      {name: 'Pharmacist', id: 7, category: 'countries'}
    ]);

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        const { name, email, address, phone, company } = json[Math.floor(Math.random() * 10)];

        const correspondants = json.splice(Math.floor(Math.random() * 10), 4);
        setCorrespondants(correspondants.map(({name}: {name: string}) => name));

        setName(name);
        setWorkPosition(company.bs);
        setCompany(company.name);
        setCity(address.city);
        setEmail(email);
        setPhone(phone);
      });

    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((json) => {
        let randomIndex = Math.floor(Math.random() * 10);
        const comments = json.slice(randomIndex, randomIndex + 6);
        const proposals = comments.map(({name, email, body}: {name: string, email: string, body: string}) => ({
            name: name.slice(0, 10),
            date: (new Date(+(new Date()) - Math.floor(Math.random()*10000000000))).toString().slice(0, 10),
            entity: email,
            expertise: body.slice(5, 10),
            firm: body.slice(5, 12),
            location: body.slice(2, 8)
        }));

        setProposals(proposals);

        randomIndex = Math.floor(Math.random() * 10);
        const comments2 = json.slice(randomIndex, randomIndex + 3);
        const reviews = comments2.map(({name, email, body}: {name: string, email: string, body: string}) => ({
          name: name.slice(0, 10),
          date: (new Date(+(new Date()) - Math.floor(Math.random()*10000000000))).toString().slice(0, 10),
          entity: email,
          expertise: body.slice(5, 10),
          firm: body.slice(5, 12),
          location: body.slice(2, 8)
        }));

        setReviews(reviews);
      });

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        let randomIndex = Math.floor(Math.random() * 10);
        const posts = json.slice(randomIndex, randomIndex + 5);
        const fees = posts.map(({title, body}: {title: string, body: string}) => {
          const randomYear = 2000 + (Math.floor(Math.random() * 21));
          const randomPrice = Math.floor(Math.random() * 10000);

          return {
          year: randomYear,
          costCenter: title.slice(0, 6),
          totalAmount: randomPrice + "€",
          lawFirm: body.slice(0, 30)
        }});

        setFees(fees);
      });
  }, []);

  const value = {
    name, setName,
    workPosition, setWorkPosition,
    company, setCompany,
    city, setCity,
    email, setEmail,
    profileImage, setProfileImage,
    phone, setPhone,
    hourlyFee, setHourlyFee,
    termsAndConditions, setTermsAndConditions,
    servicesAndProjects, setServicesAndProjects,
    profileTags, setProfileTags,
    addProfileTag, removeProfileTag,
    proposals, reviews,
    fees,
    correspondants
  }

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
};

export default UserContextProvider;
