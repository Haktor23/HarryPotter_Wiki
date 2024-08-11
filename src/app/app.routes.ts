import { Routes } from '@angular/router';
import { AllCharactersComponent } from '../components/all-characters/all-characters.component';
import { AllSpellsComponent } from '../components/all-spells/all-spells.component';
import { StaffCharactersComponent } from '../components/staff-characters/staff-characters.component';
import { StudentsCharactersComponent } from '../components/students-characters/students-characters.component';

export const routes: Routes = [

    {
        path: 'characters',
        component: AllCharactersComponent
    },
    {
        path: 'spells',
        component: AllSpellsComponent
    },
    {
        path: 'staff',
        component: StaffCharactersComponent
    },
    {
        path: 'students',
        component: StudentsCharactersComponent
    }
];
