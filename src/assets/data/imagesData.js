import bannerImage1 from '.././images/guide-to-your-first-gym-workout.png'
import bannerImage2 from '.././images/man-lifting-a-barbell.jpg'
import bannerImage3 from '.././images/woman-lifting-dumbbells-each-on-both-hands.jpg'
import bannerImage4 from '.././images/woman-picking-up-dumbbells.webp'

import trainerImage1 from '.././images/male-gym-trainer-standing-pose.jpg'
import trainerImage2 from '.././images/male-gym-trainer-lifting-barbell.jpg'
import trainerImage3 from '.././images/female-gym-trainer-lifting-weights.jpg'
import trainerImage4 from '.././images/boxing-trainer-preparing-for-sparring-session.jpg'
import trainerImage5 from '.././images/gym-trainer-doing-crossfit.jpg'
import trainerImage6 from '.././images/male-gym-trainer-doing-arm-workout.jpg'


export const imagesData = [
    {
        imageId: 1,
        imageName: 'Woman resting after using a dumb bell',
        imageLocation: bannerImage1
    },
    {
        imageId: 2,
        imageName: 'Man lifting a barbell',
        imageLocation: bannerImage2
    },
    {
        imageId: 3,
        imageName: 'Woman lifting dumb bells each on both hands',
        imageLocation: bannerImage3
    },
    {
        imageId: 4,
        imageName: 'Woman picking up dumb bells',
        imageLocation: bannerImage4
    }
];

export const trainersImage = [
    {
        trainerImageId: 1,
        trainerImageName: 'Male gym trainer standing pose',
        trainerImageLocation: trainerImage1,
        trainerName: 'James Lee',
        trainerSpecialty: 'Strength Training'
    },
    {
        trainerImageId: 2,
        trainerImageName: 'Male gym trainer lifting barbells',
        trainerImageLocation: trainerImage2,
        trainerName: 'Aaron Williams',
    },
    {
        trainerImageId: 3,
        trainerImageName: 'Female gym trainer lifting weights',
        trainerImageLocation: trainerImage3,
        trainerName: 'Michelle Wu',
        trainerSpecialty: 'Aerobics'
    },
    {
        trainerImageId: 4,
        trainerImageName: 'Boxing trainer preparing for sparring session',
        trainerImageLocation: trainerImage4,
        trainerName: 'Patrick Green',
        trainerSpecialty: 'Boxing'
    },
    {
        trainerImageId: 5,
        trainerImageName: 'Gym trainer doing crossfit',
        trainerImageLocation: trainerImage5,
        trainerName: 'Daniel Alvarez',
        trainerSpecialty: 'CrossFit'
    },
    {
        trainerImageId: 6,
        trainerImageName: 'Male gym trainer doing arm workout',
        trainerImageLocation: trainerImage6,
        trainerName: 'Michael Holland',
        trainerSpecialty: 'Sports Theraphy'
    }
]

export const nav = [
    {
        id: 1,
        label: 'Home',
        link: '/',
        anchorTag: '#banner-section'
    },
    {
        id: 2,
        label: 'Trainers',
        link: '/trainers',
        anchorTag: '#trainers-section'
    },
    {
        id: 3,
        label: 'Workouts',
        link: '/workouts',
        anchorTag: '#workouts-section'
    },
            {
        id: 4,
        label: 'Contact',
        link: '/contact',
        anchorTag: '#contact-section'
    },
            {
        id: 5,
        label: 'About',
        link: '/about',
        anchorTag: '#about-section'
    },
]