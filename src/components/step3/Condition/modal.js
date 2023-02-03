import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p>QUE SE PASSE-T-IL SI JE SOUHAITE ANNULER OU MODIFIER MA RÉSERVATION ?

a) Modification
Vous pouvez modifier votre réservation, gratuitement, sous réserve que vous informiez l'équipe CityGo jusqu’à 48 heures avant l’heure de location prévue. Vous reconnaissez à cet égard que de nouveaux prix de location peuvent s’appliquer.

b) Annulation

Vous pouvez annuler votre réservation gratuitement à condition d’avoir informé l'équipe CityGo jusqu’à 72 heures avant le début du jour de la location prévue. Un bon d'échange (avoir) peut être accordé.
Si vous annulez votre réservation dans les 72 heures précédant le jour prévu de retrait du véhicule, une pénalité sera appliquée selon la date de la demande ci-dessous. Un bon d'échange (avoir) peut être accordé s'il s'agit de la basse saison.

 1- 50 DT + 25% du montant total de la location avant 48 Heures.

 2- 50 DT + 50% du montant total de la location avant 24 Heures.

 3- Le montant total pour toute annulation le jour de la location.

c) Non présentation (« No show »)

Si vous n’avez pas annulé votre réservation et que vous ne vous présentez pas pour retirer le véhicule aux date et heure de location prévues, une pénalité du montant total de la location sera appliquée. Un bon d'échange (avoir) peut être accordé s'il s'agit de la basse saison.

c) Retard
Notre agence s’engage à vous fournir la catégorie de Véhicule choisie jusqu’à une heure après son horaire mentionné sur la confirmation de la location. Si vous dépassez l'heure, nous serons en mesure d'appliquer un surcoût.

d) Cas de force majeure
Dans le cadre de la présente section, Vous ne serez pas tenu responsable en cas d’annulation de la réservation ou de défaut de prise du Véhicule dû à la survenance d’un cas de Force majeure. Juridiquement, il y a force majeure lorsqu'un événement échappant à Votre contrôle, qui ne pouvait être raisonnablement prévu lors de la conclusion du contrat et dont les effets ne peuvent être évités par des mesures appropriées, vous empêche d’exécuter le contrat de location, Si vous l'indiquez, il vous appartiendra d’établir que l'événement est effectivement constitutif d’un cas de force majeure.  Un bon d'échange (avoir) peut être accordé.
Veuillez noter que les grèves, retards ou annulations de votre moyen de transport (train, avion, etc.) ne seront pas considérés comme des cas de force majeure et ne vous exonèrent pas de frais supplémentaires au titre d’annulation tardive ou de « non présentation ». 

</p>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}