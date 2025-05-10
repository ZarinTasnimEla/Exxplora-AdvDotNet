export interface ProfileSetup {
    location: string
    institution: string
    startYear: number
    endYear: number
    isStudent: boolean
    domains: number[]
    profile: File | undefined
    cover: File | undefined
}