import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProfileDetail from "../components/ProfileDetail";
import { users } from "../data/users";

export default function ProfileIg() {
  const { profileId } = useParams();
  const navigate = useNavigate();
  if (!profileId) return <div>Nie znaleziono profilu.</div>;

  // Dopasuj usera po nazwie folderu (ignorując wielkość liter i spacje)
  const user = users.find(
    (u) => u.name.replace(/\s+/g, "-").toLowerCase() === profileId.toLowerCase()
  );

  if (!user) return <div>Nie znaleziono profilu w bazie users.ts.</div>;

  return (
    <ProfileDetail
      user={user}
      onBack={() => navigate(-1)}
      onSendMessage={() => {}}
    />
  );
}
